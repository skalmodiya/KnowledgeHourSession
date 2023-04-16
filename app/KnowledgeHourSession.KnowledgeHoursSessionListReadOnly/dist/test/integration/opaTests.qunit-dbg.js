sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'KnowledgeHourSession/KnowledgeHoursSessionListReadOnly/test/integration/FirstJourney',
		'KnowledgeHourSession/KnowledgeHoursSessionListReadOnly/test/integration/pages/KnowledgeHourSessionReadOnlyList',
		'KnowledgeHourSession/KnowledgeHoursSessionListReadOnly/test/integration/pages/KnowledgeHourSessionReadOnlyObjectPage'
    ],
    function(JourneyRunner, opaJourney, KnowledgeHourSessionReadOnlyList, KnowledgeHourSessionReadOnlyObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('KnowledgeHourSession/KnowledgeHoursSessionListReadOnly') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheKnowledgeHourSessionReadOnlyList: KnowledgeHourSessionReadOnlyList,
					onTheKnowledgeHourSessionReadOnlyObjectPage: KnowledgeHourSessionReadOnlyObjectPage
                }
            },
            opaJourney.run
        );
    }
);