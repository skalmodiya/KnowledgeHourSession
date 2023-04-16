sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'KnowledgeHourSession/KnowledgeHoursSessionRequest/test/integration/FirstJourney',
		'KnowledgeHourSession/KnowledgeHoursSessionRequest/test/integration/pages/KnowledgeHourSessionCreateRequestObjectPage'
    ],
    function(JourneyRunner, opaJourney, KnowledgeHourSessionCreateRequestObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('KnowledgeHourSession/KnowledgeHoursSessionRequest') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheKnowledgeHourSessionCreateRequestObjectPage: KnowledgeHourSessionCreateRequestObjectPage
                }
            },
            opaJourney.run
        );
    }
);