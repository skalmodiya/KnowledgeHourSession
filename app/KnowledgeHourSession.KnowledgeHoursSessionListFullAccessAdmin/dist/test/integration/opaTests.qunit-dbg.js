sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'KnowledgeHourSession/KnowledgeHoursSessionListFullAccessAdmin/test/integration/FirstJourney',
		'KnowledgeHourSession/KnowledgeHoursSessionListFullAccessAdmin/test/integration/pages/KnowledgeHourSessionFullAccessList',
		'KnowledgeHourSession/KnowledgeHoursSessionListFullAccessAdmin/test/integration/pages/KnowledgeHourSessionFullAccessObjectPage'
    ],
    function(JourneyRunner, opaJourney, KnowledgeHourSessionFullAccessList, KnowledgeHourSessionFullAccessObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('KnowledgeHourSession/KnowledgeHoursSessionListFullAccessAdmin') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheKnowledgeHourSessionFullAccessList: KnowledgeHourSessionFullAccessList,
					onTheKnowledgeHourSessionFullAccessObjectPage: KnowledgeHourSessionFullAccessObjectPage
                }
            },
            opaJourney.run
        );
    }
);