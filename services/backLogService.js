var
    BACKLOG_USER_AGENT = 'Backlog Webhook',
    BACKLOG_DOMAIN = process.env.BACKLOG_TEAM_DOMAIN;

if (!BACKLOG_DOMAIN) {
    console.log("BACKLOG_DOMAIN is not set");
}


var isBacklogAccess = function (requestHeader) {
    return requestHeader['user-agent'] === BACKLOG_USER_AGENT;
};


var parseBody = function (requestBody) {

    var
        tiltle = requestBody['content']['summary'],
        desciption = requestBody['content']['description'],
        issueId = requestBody['content']['key_id'],
        projectKey = requestBody['project']['projectKey'];

    return {
        url: 'https://' + BACKLOG_DOMAIN + '/view/' + projectKey + '-' + issueId,
        title: tiltle,
        desciption: desciption
    };

};

module.exports = {
    isBacklogAccess : isBacklogAccess,
    parseBody: parseBody,
};