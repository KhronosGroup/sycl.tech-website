/*---------------------------------------------------------------------------------------------
 *
 *  Copyright (C) 2016-2025 Codeplay Software Ltd.
 *  Copyright (C) 2025 The Khronos Group, Inc.
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
 *--------------------------------------------------------------------------------------------*/

export const environment = {
  json_feed_base_url: 'https://feeds.sycl.tech',
  github_front_end_url: 'https://github.com/khronosgroup/sycl.tech-website',
  github_content_repo_collection_base_url: 'https://github.com/khronosgroup/sycl.tech-content/tree/main/content',
  github_content_url: 'https://github.com/khronosgroup/sycl.tech-content',
  socials: {
    github: 'https://github.com/KhronosGroup/',
    discourse: 'https://www.khronos.org/sycl/',
    discord: 'https://discord.com/invite/FkGSFA3asN'
  },
  privacy_policy_email: 'privacy@khronosgroup.org',
  fathom_analytics_token: 'MMWGQHXZ',

  // A list of any storage keys/cookies that this site uses
  allowed_storage_keys: [
    'st-cookies-accepted',
    'st-dark-mode-enabled',
    'st-enable-tracking',
    'st-playground-compiler-tag',
    'st-playground-saved',
    'st-last-visit-date',
    'st-blocked-alerts',
    'st-enable-alerts',
  ],
};
