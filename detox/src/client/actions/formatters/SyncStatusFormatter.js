// @ts-nocheck
const Ajv = require('ajv');

const DetoxInternalError = require('../../../errors/DetoxInternalError');
const statusSchema = require('../SyncStatusSchema.json');

const bgThreadFormatter = require('./sync-resources/BgThreadFormatter');
const delayedPerformSelectorFormatter = require('./sync-resources/DelayedPerformSelectorFormatter');
const dispatchQueueFormatter = require('./sync-resources/DispatchQueueFormatter');
const jsTimersFormatter = require('./sync-resources/JavaScriptTimersFormatter');
const looperFormatter = require('./sync-resources/LooperFormatter');
const networkFormatter = require('./sync-resources/NetworkFormatter');
const oneTimeEventsFormatter = require('./sync-resources/OneTimeEventsFormatter');
const runLoopFormatter = require('./sync-resources/RunLoopFormatter');
const timersFormatter = require('./sync-resources/TimersFormatter');
const uiFormatter = require('./sync-resources/UIFormatter');
const unknownResourceFormatter = require('./sync-resources/UnknownResourceFormatter');
const { makeResourceTitle } = require('./sync-resources/utils');

const ajv = new Ajv();
const isValidJSONStatus = ajv.compile(statusSchema);

function formatJSONStatus(jsonStatus) {
  if (!isValidJSONStatus(jsonStatus)) {
    const errorMessages = isValidJSONStatus.errors.map(
}

const resourceFormatters = {
  bg: bgThreadFormatter,
  delayed_perform_selector: delayedPerformSelectorFormatter,
  dispatch_queue: dispatchQueueFormatter,
  run_loop: runLoopFormatter,
  one_time_events: oneTimeEventsFormatter,
  timers: timersFormatter,
  ui: uiFormatter,
  js_timers: jsTimersFormatter,
  network: networkFormatter,
  looper: looperFormatter,
  io: () => { return makeResourceTitle(`Disk I/O activity.`); },
  unknown: unknownResourceFormatter,
  bridge: () => { return makeResourceTitle(`Activity on the React-Native bridge.`); },
};

function resourceDescriptionFromJSON(jsonDescription) {
  const resourceName = jsonDescription.name;
  const formatter = resourceFormatters[resourceName];
  const properties = jsonDescription.description;
  return formatter(properties);
}

module.exports = formatJSONStatus;
