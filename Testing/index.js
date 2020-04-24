Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    "elements": [
        {
            "type": "nouislider",
            "name": "range",
            "title": "Please range"
        }
    ]
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });

$("#surveyElement").Survey({model: survey});
