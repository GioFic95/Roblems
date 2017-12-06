var pie = new d3pie("pieChart", {
    "header": {
        "title": {
            "text": "Dilemma Motociclista",
            "fontSize": 22,
            "font": "verdana"
        },
        "subtitle": {
            "color": "#999999",
            "fontSize": 10,
            "font": "verdana"
        },
        "titleSubtitlePadding": 12
    },
    "footer": {
        "text": "source: http://www.openroboethics.org/results-random-chance-over-informed-decision/",
        "color": "#999999",
        "fontSize": 11,
        "font": "open sans",
        "location": "bottom-left"
    },
    "size": {
        "canvasHeight": 400,
        "canvasWidth": 590,
        "pieOuterRadius": "88%"
    },
    "data": {
        "sortOrder": "value-asc",
        "content": [
            {
                "label": "Sterza verso il motociclista con il casco",
                "value": 2,
                "color": "#767e38"
            },
            {
                "label": "Sterza verso il motociclista senza il casco",
                "value": 10,
                "color": "#7e6838"
            },
            {
                "label": "Cerca di frenare e basta",
                "value": 45,
                "color": "#7e5038"
            },
            {
                "label": "Ignora la presenza o meno del casco",
                "value": 43,
                "color": "#7e3838"
            }
        ]
    },
    "labels": {
        "outer": {
            "pieDistance": 20
        },
        "mainLabel": {
            "font": "verdana",
            "fontSize": 13
        },
        "percentage": {
            "color": "#000000",
            "font": "verdana",
            "fontSize": 15,
            "decimalPlaces": 0
        },
        "value": {
            "color": "#e1e1e1",
            "font": "verdana",
            "fontSize": 15
        },
        "lines": {
            "enabled": true,
            "color": "#cccccc"
        },
        "truncation": {
            "enabled": true
        }
    },
    "tooltips": {
        "enabled": true,
        "type": "placeholder",
        "string": "{label}: {percentage}%"
    },
    "effects": {
        "pullOutSegmentOnClick": {
            "effect": "back",
            "speed": 400,
            "size": 8
        }
    },
    "misc": {
        "colors": {
            "segmentStroke": "#903838"
        },
        "gradient": {
            "enabled": true,
            "percentage": 75,
            "color": ""
        }
    },
    "callbacks": {
        "onMouseoutSegment": null,
        "onClickSegment": null
    }
});