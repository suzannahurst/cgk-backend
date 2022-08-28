'use strict';

/**
 * fair router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::fair.fair');
