/*
 *  Copyright 2011 Rackspace
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

var config;

try {
	config = require(path.resolve(argv.c)).config;
} catch (e) {
	return;
}

global.DISABLE_NEWRELIC = !config.plugins.newrelic.enable;
console.log('DEBUG: Enabling NR plugin', !global.DISABLE_NEWRELIC);

require('pipedrive-newrelic');
