import { Nav } from './menu.type';

export class MenuConfig {
    config: Array<Nav> =
    [
        {
            "label": "External Links",
            "subnav": [
                {
                    "label": "Google",
                    "icon": "",
                    "uri": "https://google.com"
                },{
                    "label": "Facebook",
                    "icon": "",
                    "uri": "https://facebook.com"
                },{
                    "label": "eBay",
                    "icon": "",
                    "uri": "https://ebay.com"
                }
            ],
            "subnavState": "inactive"
        }
    ];
}