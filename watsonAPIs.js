var picLocation = './right_side.jpg';
var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
var fs = require('fs');

var visualRecognition = new VisualRecognitionV3({
    version: '2018-03-19',
    iam_apikey: '836NTa1buNGHgiSPiXrv3MD171AMmFMdJ9y6SteOF2F9'
});

var images_file = fs.createReadStream(picLocation);
var threshold = 0.6;

var classifier_ids = ["DamagedDoor_1420381741"];

var params = {
    images_file: images_file,
    classifier_ids: classifier_ids,
    threshold: threshold
};

visualRecognition.classify(params, function (err, response) {
    if (err) {
        console.log(err);
    } else {
        console.log('Doors');
        console.log(JSON.stringify(response, null, 2))
    }
});