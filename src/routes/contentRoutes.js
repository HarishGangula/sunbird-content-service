/**
 * file: content-route.js
 * author: Anuj Gupta
 * desc: route file for content
 */

var contentService = require('../service/contentService');
var requestMiddleware = require('../middlewares/request.middleware');

var BASE_URL = "/v1/content";

module.exports = function(app) {

    app.route('/health').get(requestMiddleware.createAndValidateRequestBody, contentService.checkHealth);

    app.route(BASE_URL + '/search')
        .post(requestMiddleware.createAndValidateRequestBody, contentService.searchContentAPI);

    app.route(BASE_URL + '/create')
        .post(requestMiddleware.createAndValidateRequestBody, contentService.createContentAPI);

    app.route(BASE_URL + '/update/:contentId')
        .patch(requestMiddleware.createAndValidateRequestBody, contentService.updateContentAPI);

    app.route(BASE_URL + '/upload/:contentId')
        .post(requestMiddleware.createAndValidateRequestBody, contentService.uploadContentAPI);

    app.route(BASE_URL + '/review/:contentId')
        .post(requestMiddleware.createAndValidateRequestBody, contentService.reviewContentAPI);

    app.route(BASE_URL + '/publish/:contentId')
        .post(requestMiddleware.createAndValidateRequestBody, contentService.publishContentAPI);

    app.route(BASE_URL + '/retire')
        .delete(requestMiddleware.createAndValidateRequestBody, contentService.retireContentAPI);

    app.route(BASE_URL + '/reject/:contentId')
        .post(requestMiddleware.createAndValidateRequestBody, contentService.rejectContentAPI);

    app.route(BASE_URL + '/read/:contentId')
        .get(requestMiddleware.createAndValidateRequestBody, contentService.getContentAPI);

    app.route(BASE_URL + '/read/mycontent/:createdBy')
        .get(requestMiddleware.createAndValidateRequestBody, contentService.getMyContentAPI);

    app.route(BASE_URL + '/flag/:contentId')
        .post(requestMiddleware.createAndValidateRequestBody, contentService.flagContentAPI);

    app.route(BASE_URL + '/flag/accept/:contentId')
        .post(requestMiddleware.createAndValidateRequestBody, contentService.acceptFlagContentAPI);

    app.route(BASE_URL + '/flag/reject/:contentId')
        .post(requestMiddleware.createAndValidateRequestBody, contentService.rejectFlagContentAPI);

    app.route(BASE_URL + '/upload/url/:contentId')
        .post(requestMiddleware.createAndValidateRequestBody, contentService.uploadContentUrlAPI);

    app.route(BASE_URL + '/retire')
        .get(contentService.checkHealth);
};
