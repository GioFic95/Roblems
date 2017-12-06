var graficoMotociclista;
var graficoAlcolizzata;
var graficoTunnel;

$(document).ready(function () {
    graficoMotociclista = new d3pie("graficoMotociclista", {
        "size": {
            "canvasHeight": 400,
            "canvasWidth": 590,
            "pieOuterRadius": "88%"
        },
        "data": {
            "sortOrder": "value-asc",
            "content": [
                {
                    "label": "Con il casco",
                    "valToolTip": "Sterza verso il motociclista con il casco",
                    "value": 2,
                    "color": "#fe7f2d"
                },
                {
                    "label": "Senza casco",
                    "valToolTip": "Sterza verso il motociclista senza il casco",
                    "value": 10,
                    "color": "#fcca46"
                },
                {
                    "label": "Frena",
                    "valToolTip": "Cerca di frenare e basta",
                    "value": 45,
                    "color": "#8ecc51"
                },
                {
                    "label": "Ignora il casco",
                    "valToolTip": "Ignora la presenza o meno del casco",
                    "value": 43,
                    "color": "#619b8a"
                }
            ]
        },
        "labels": {
            "outer": {
                "pieDistance": 20
            },
            "mainLabel": {
                "font": "verdana",
                "color": "black",
                "fontSize": 15
            },
            "percentage": {
                "color": "#000000",
                "font": "verdana",
                "fontSize": 15,
                "decimalPlaces": 0
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
            "string": "{valToolTip}: {percentage}%"
        },
        "effects": {
            "pullOutSegmentOnClick": {
                "effect": "bounce",
                "speed": 400,
                "size": 10
            }
        },
        "misc": {
            "colors": {
                "segmentStroke": "rgba(255, 255, 255, 0.5)"
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

    graficoAlcolizzata = new d3pie("graficoAlcolizzata", {
        "size": {
            "canvasHeight": 400,
            "canvasWidth": 590,
            "pieOuterRadius": "88%"
        },
        "data": {
            "sortOrder": "value-asc",
            "content": [
                {
                    "label": "Emma",
                    "valToolTip": "Ubbidisce sempre alla padrona",
                    "value": 16,
                    "color": "#fe7f2d"
                },
                {
                    "label": "Bob",
                    "valToolTip": "Ubbidisce sempre alle direttive di Bob e del dottore",
                    "value": 55,
                    "color": "#fcca46"
                },
                {
                    "label": "Entrambi",
                    "valToolTip": "Ubbidisce a volte a Emma e a volte a Bob",
                    "value": 29,
                    "color": "#8ecc51"
                }
            ]
        },
        "labels": {
            "outer": {
                "pieDistance": 20
            },
            "mainLabel": {
                "font": "verdana",
                "color": "black",
                "fontSize": 15
            },
            "percentage": {
                "color": "#000000",
                "font": "verdana",
                "fontSize": 15,
                "decimalPlaces": 0
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
            "string": "{valToolTip}: {percentage}%"
        },
        "effects": {
            "pullOutSegmentOnClick": {
                "effect": "bounce",
                "speed": 400,
                "size": 10
            }
        },
        "misc": {
            "colors": {
                "segmentStroke": "rgba(255, 255, 255, 0.5)"
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

    graficoTunnel = new d3pie("graficoTunnel", {
        "size": {
            "canvasHeight": 400,
            "canvasWidth": 590,
            "pieOuterRadius": "88%"
        },
        "data": {
            "sortOrder": "value-asc",
            "content": [
                {
                    "label": "Bambino",
                    "valToolTip": "Prosegue dritto e uccide il bambino",
                    "value": 64,
                    "color": "#fcca46"
                },
                {
                    "label": "Autista",
                    "valToolTip": "Sterza e uccide Bob",
                    "value": 36,
                    "color": "#619b8a"
                }
            ]
        },
        "labels": {
            "outer": {
                "pieDistance": 20
            },
            "mainLabel": {
                "font": "verdana",
                "color": "black",
                "fontSize": 15
            },
            "percentage": {
                "color": "#000000",
                "font": "verdana",
                "fontSize": 15,
                "decimalPlaces": 0
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
            "string": "{valToolTip}: {percentage}%"
        },
        "effects": {
            "pullOutSegmentOnClick": {
                "effect": "bounce",
                "speed": 400,
                "size": 10
            }
        },
        "misc": {
            "colors": {
                "segmentStroke": "rgba(255, 255, 255, 0.5)"
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
});