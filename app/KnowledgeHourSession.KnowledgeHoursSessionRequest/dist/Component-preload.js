//@ui5-bundle KnowledgeHourSession/KnowledgeHoursSessionRequest/Component-preload.js
sap.ui.require.preload({
	"KnowledgeHourSession/KnowledgeHoursSessionRequest/Component.js":function(){
sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("KnowledgeHourSession.KnowledgeHoursSessionRequest.Component",{metadata:{manifest:"json"},getStartupParameters:function(){return Promise.resolve({preferredMode:["create"]})}})});
},
	"KnowledgeHourSession/KnowledgeHoursSessionRequest/i18n/i18n.properties":'# This is the resource bundle for KnowledgeHourSession.KnowledgeHoursSessionRequest\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Knowledge Hours Session Request\n\n#YDES: Application description\nappDescription=Knowledge Hours Session Request\n\nflpTitle=Knowledge Hours Session Request\n\nflpSubtitle=\n',
	"KnowledgeHourSession/KnowledgeHoursSessionRequest/manifest.json":'{"_version":"1.44.0","sap.app":{"id":"KnowledgeHourSession.KnowledgeHoursSessionRequest","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:feop","version":"1.9.3","toolsId":"7db96e8a-a17f-4b68-9a8d-9aa018e09637"},"dataSources":{"mainService":{"uri":"service/KnowledgeHourSession/","type":"OData","settings":{"annotations":[],"localUri":"localService/metadata.xml","odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"KnowledgeHourSession-KnowledgeHoursSessionRequest-inbound":{"signature":{"parameters":{},"additionalParameters":"allowed"},"semanticObject":"KnowledgeHourSessionKnowledgeHoursSessionRequest","action":"display","title":"{{flpTitle}}","subTitle":"{{flpSubtitle}}","icon":""}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.104.2","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"KnowledgeHourSession.KnowledgeHoursSessionRequest.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":"KnowledgeHourSessionCreateRequest({key}):?query:","name":"KnowledgeHourSessionCreateRequestObjectPage","target":"KnowledgeHourSessionCreateRequestObjectPage"}],"targets":{"KnowledgeHourSessionCreateRequestObjectPage":{"type":"Component","id":"KnowledgeHourSessionCreateRequestObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"entitySet":"KnowledgeHourSessionCreateRequest","content":{"header":{"visible":false,"anchorBarVisible":false}}}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"lcap.KnowledgeHourSession"}}'
});
//# sourceMappingURL=Component-preload.js.map