using { KnowledgeHourSession as my } from '../db/schema';

using KnowledgeHourSession from '../db/schema';

@path : 'service/KnowledgeHourSession'
service KnowledgeHourSessionService
{

    annotate KnowledgeHourSessionCreateRequest with @restrict :
    [
        { grant : [ '*' ], to : [ 'SystemAdministrator' ] },
        { grant : [ '*' ], to : [ 'Trainer' ] }
    ];
    annotate KnowledgeHourSessionCreateRequest with @requires :
    [
        'authenticated-user'
    ];

    annotate KnowledgeHourSessionFullAccess with @requires :
    [
        'authenticated-user'
    ];

    annotate KnowledgeHourSessionFullAccess with @restrict :
    [
        { grant : [ '*' ], to : [ 'SystemAdministrator' ] }
    ];

    annotate KnowledgeHourSessionReadOnly with @requires :
    [
        'authenticated-user'
    ];

    annotate KnowledgeHourSessionReadOnly with @restrict :
    [
        { grant : [ '*' ], to : [ 'SystemAdministrator' ] },
        { grant : [ 'READ' ], to : [ 'Trainer' ] }
    ];

    @readonly
    entity KnowledgeHourSessionReadOnly as
        projection on my.KnowledgeHourSession;

    @cds.redirection.target : false
    @odata.draft.enabled
    entity KnowledgeHourSessionFullAccess as
        projection on my.KnowledgeHourSession;

    @cds.redirection.target : false
    @odata.draft.enabled
    entity KnowledgeHourSessionCreateRequest as
        projection on my.KnowledgeHourSession;
}

annotate KnowledgeHourSessionService with @requires :
[
    'authenticated-user',
    'SystemAdministrator',
    'Trainer'
];
