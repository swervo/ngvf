public with sharing class domng_resourceSwitch {

    Public Boolean useLocalResources {
        get;
        private set;
    }
    public domng_resourceSwitch() {
        domUseLocalhostResources__c useLocal = domUseLocalhostResources__c.getValues('default');
        System.debug(useLocal.domUseLocal__c);
        useLocalResources = useLocal.domUseLocal__c;
    }
}
