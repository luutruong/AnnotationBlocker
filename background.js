/**
 * @license
 * Copyright 2016 TruongLuu. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *   _____                               _                
 *  |_   _| __ _   _  ___  _ __   __ _  | |   _   _ _   _ 
 *    | || '__| | | |/ _ \| '_ \ / _` | | |  | | | | | | |
 *    | || |  | |_| | (_) | | | | (_| | | |__| |_| | |_| |
 *    |_||_|   \__,_|\___/|_| |_|\__, | |_____\__,_|\__,_|
 *                               |___/                             
 *
 * @author TruongLuu <me@truongluu.com>
 * @date 2016-06-28 16:34:49
 * @lastModified 2017-02-02 17:35:59
 */
'use strict';

var LOAD_COMPLETE   = 'complete';
var YOUTUBE_DOMAIN  = 'youtube.com';

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if(tab.status !== LOAD_COMPLETE) {
        return;
    }

    if(tab.url.indexOf(YOUTUBE_DOMAIN) === -1) {
        return;
    }

    var injectorCSS = ".video-annotations, .html5-video-player .ytp-ce-element {display: none !important;}";
    chrome.tabs.insertCSS(tabId, {
        code: injectorCSS
    });
});