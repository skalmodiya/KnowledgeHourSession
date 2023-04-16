using KnowledgeHourSessionService as service from '../../srv/service';

annotate service.KnowledgeHourSessionReadOnly with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'SAP_I_NUMBER',
            Value : SAP_I_NUMBER,
        },
        {
            $Type : 'UI.DataField',
            Label : 'SAP_EMAIL_ADDRESS',
            Value : SAP_EMAIL_ADDRESS,
        },
        {
            $Type : 'UI.DataField',
            Label : 'KNOWLDEG_HOUR_SESSION_DATE',
            Value : KNOWLDEG_HOUR_SESSION_DATE,
        },
        {
            $Type : 'UI.DataField',
            Label : 'KNOWLDEG_HOUR_SESSION_TIME',
            Value : KNOWLDEG_HOUR_SESSION_TIME,
        },
        {
            $Type : 'UI.DataField',
            Label : 'DURATION',
            Value : DURATION,
        },
    ]
);
annotate service.KnowledgeHourSessionReadOnly with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'SAP_I_NUMBER',
                Value : SAP_I_NUMBER,
            },
            {
                $Type : 'UI.DataField',
                Label : 'SAP_EMAIL_ADDRESS',
                Value : SAP_EMAIL_ADDRESS,
            },
            {
                $Type : 'UI.DataField',
                Label : 'KNOWLDEG_HOUR_SESSION_DATE',
                Value : KNOWLDEG_HOUR_SESSION_DATE,
            },
            {
                $Type : 'UI.DataField',
                Label : 'KNOWLDEG_HOUR_SESSION_TIME',
                Value : KNOWLDEG_HOUR_SESSION_TIME,
            },
            {
                $Type : 'UI.DataField',
                Label : 'DURATION',
                Value : DURATION,
            },
            {
                $Type : 'UI.DataField',
                Label : 'COURSE_OUTLINE',
                Value : COURSE_OUTLINE,
            },
            {
                $Type : 'UI.DataField',
                Label : 'LEARNING_OBJECTIVE',
                Value : LEARNING_OBJECTIVE,
            },
            {
                $Type : 'UI.DataField',
                Label : 'PRE_REQUISITE_IF_ANY',
                Value : PRE_REQUISITE_IF_ANY,
            },
            {
                $Type : 'UI.DataField',
                Label : 'TARGET_AUDIENCE',
                Value : TARGET_AUDIENCE,
            },
            {
                $Type : 'UI.DataField',
                Label : 'SESSION_TYPE',
                Value : SESSION_TYPE,
            },
            {
                $Type : 'UI.DataField',
                Label : 'DIAL_IN_DETAILS',
                Value : DIAL_IN_DETAILS,
            },
            {
                $Type : 'UI.DataField',
                Label : 'VENUE',
                Value : VENUE,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
