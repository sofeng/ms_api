package io.metersphere.api.jmeter;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import io.metersphere.commons.constants.DelimiterConstants;
import lombok.Data;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang3.StringUtils;

import java.util.*;

@Data
public class TestResult {

    private String testId;

    private int scenarioTotal;

    private int scenarioSuccess;

    private int scenarioError;

    private String userId;

    private boolean isDebug;

    private boolean end;

    private String runMode;

    private int success = 0;

    private int error = 0;

    private int total = 0;

    private int totalAssertions = 0;

    private int passAssertions = 0;

    private String console;

    private String runningDebugSampler;

    private List<ScenarioResult> scenarios = new ArrayList<>();

    private Map<String, Boolean> margeScenariMap = new HashMap<>();

    private Map<String, Boolean> scenarioStepMap = new HashMap<>();

    private int scenarioStepSuccess = 0;
    private int scenarioStepError = 0;
    private int scenarioStepTotal = 0;
    public void addError(int count) {
        this.error += count;
    }

    public void addSuccess() {
        this.success++;
    }

    public void addTotalAssertions(int count) {
        this.totalAssertions += count;
    }

    public void addPassAssertions(int count) {
        this.passAssertions += count;
    }

    private static final String SEPARATOR = DelimiterConstants.SEPARATOR.toString();

    private void setStatus(List<String> id_names, boolean status) {
        if (CollectionUtils.isNotEmpty(id_names)) {
            id_names.forEach(item -> {
                if (!margeScenariMap.containsKey(item) || status) {
                    margeScenariMap.put(item, status);
                }
            });
        }
    }

    private void setStatus(String id_names, boolean status) {
        if (!margeScenariMap.containsKey(id_names) || status) {
            margeScenariMap.put(id_names, status);
        }
    }

    private void setStepStatus(String step_names, boolean status) {
        if (!scenarioStepMap.containsKey(step_names) || status) {
            scenarioStepMap.put(step_names, status);
        }
    }


    public void addScenario(ScenarioResult result) {
        /**
         * 1.10.2?????????????????????
         * ????????????????????????????????????????????????????????????
         * ?????????????????????????????????????????????????????????
         */
        if (result != null && CollectionUtils.isNotEmpty(result.getRequestResults())) {
            result.getRequestResults().forEach(item -> {
                String itemAndScenarioName = "";
                 if (StringUtils.isNotEmpty(item.getScenario())) {
                    //???1????????????????????? ???all_id_names????????????????????????
                    List<String> all_id_names = JSON.parseObject(item.getScenario(), List.class);
                    if(all_id_names.size()>1){
                        StringBuffer scenarioNames = new StringBuffer();
                        //???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                        scenarioNames.append(all_id_names.get(all_id_names.size()-1)+all_id_names.get(all_id_names.size()-2));
                        this.setStatus(scenarioNames.toString(), item.getError() > 0);
                        itemAndScenarioName = scenarioNames.toString();
                    }else{
                        //????????????????????????????????????????????????????????????  ??????UUID????????????
                        itemAndScenarioName = item.getName()+":"+JSONArray.toJSONString(all_id_names.get(0))+ UUID.randomUUID().toString();
                        this.setStatus(all_id_names, item.getError() > 0);
                    }

                }
                if (StringUtils.isNotEmpty(item.getName()) && item.getName().indexOf(SEPARATOR) != -1) {
                    String array[] = item.getName().split(SEPARATOR);
                    item.setName(array[1] + array[0]);
                    item.getSubRequestResults().forEach(subItem -> {
                        subItem.setName(array[0]);
                    });
                } else {
                    this.genScenarioInSubReqeustResult(item);
                }
                this.setStepStatus(itemAndScenarioName,item.getError()>0);
            });
            scenarios.add(result);
        }
        /**
         * 1.10.2 ????????????/?????????????????????????????????????????????????????????????????????
         */
        for (String key : scenarioStepMap.keySet()) {
            if (scenarioStepMap .get(key)) {
                this.scenarioStepError++;
            } else {
                this.scenarioStepSuccess++;
            }
        }
        boolean hasError = false;
        for (String key : margeScenariMap.keySet()) {
            if (margeScenariMap.get(key)) {
                hasError = true;
                break;
            }
        }
        if(!margeScenariMap.isEmpty()){
            if(hasError){
                this.scenarioError ++;
            }else {
                this.scenarioSuccess++;
            }
            this.scenarioTotal++;
        }


        this.setScenarioStepTotal(this.scenarioStepMap.size());

    }

    //???????????????????????????????????????????????????
    private String genScenarioInSubReqeustResult(RequestResult item) {

        if (StringUtils.isNotEmpty(item.getName()) && item.getName().indexOf(SEPARATOR) != -1) {
            String array[] = item.getName().split(SEPARATOR);
            item.setName(array[0]);
        }

        if(StringUtils.isNotEmpty(item.getScenario())){
            List<String> id_names = JSON.parseObject(item.getScenario(), List.class);
            this.setStatus(id_names, item.getError() > 0);
            return item.getScenario();
        }else{
            if(CollectionUtils.isNotEmpty(item.getSubRequestResults())){
                for (RequestResult requestResult:item.getSubRequestResults()) {
                    String result = this.genScenarioInSubReqeustResult(requestResult);
                }
            }
            return null;
        }
    }
}