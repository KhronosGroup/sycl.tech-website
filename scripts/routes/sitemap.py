#!/usr/bin/env python3

#
#   Copyright (C) Codeplay Software Limited.
#
#   Licensed under the Apache License, Version 2.0 (the "License");
#   you may not use these files except in compliance with the License.
#   You may obtain a copy of the License at
#
#       http://www.apache.org/licenses/LICENSE-2.0
#
#   For your convenience, a copy of the License has been included in this
#   repository.
#
#   Unless required by applicable law or agreed to in writing, software
#   distributed under the License is distributed on an "AS IS" BASIS,
#   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#   See the License for the specific language governing permissions and
#   limitations under the License.
#

import os
import sys


def load_routes(routes_file_path: str):
    with open(routes_file_path, mode='r', encoding='utf-8') as file:
        return file.read().split(os.linesep)


def generate(base_url: str, routes_file_path: str):
    routes = load_routes(routes_file_path)
    route_urls = [f'\t<url><loc>{base_url}{x}</loc></url>' for x in routes]

    output = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{os.linesep.join(route_urls)}
</urlset>
"""

    return output


if __name__ == '__main__':
    args = sys.argv[1:]

    try:
        if len(args) != 2:
            raise ValueError('Please provide a valid feed base URL and routes.txt file path.')

        print(generate(args[0], args[1]))
    except Exception as e:
        print(str(e))
        quit(1)
