namespace KnowledgeHourSession;

using
{
    Country,
    Currency,
    Language,
    User,
    cuid,
    extensible,
    managed,
    temporal
}
from '@sap/cds/common';

entity KnowledgeHourSession : cuid, managed
{
    key ID : UUID
        @Core.Computed;
    SAP_I_NUMBER : String(100) default 'I9999999';
    SAP_EMAIL_ADDRESS : String(100) default 'test@noemail.com';
    KNOWLDEG_HOUR_SESSION_DATE : Date default $now;
    KNOWLDEG_HOUR_SESSION_TIME : Time default $now;
    DURATION : Double default 1;
    COURSE_OUTLINE : LargeString;
    LEARNING_OBJECTIVE : LargeString;
    PRE_REQUISITE_IF_ANY : LargeString;
    TARGET_AUDIENCE : LargeString;
    SESSION_TYPE : String(100) default 'Virtual Connect';
    DIAL_IN_DETAILS : LargeString;
    VENUE : String(100) default 'Virtual (Teams)';
}
