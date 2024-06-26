# --------------------------------#
# "make" command
# --------------------------------#

-include ./make/text.mk
-include ./make/help.mk
-include ./make/url.mk

.SILENT:
.PHONY: build

## Setup - Install dependencies
install:
	npm install

install@integration:
	npm install --color=always --no-progress --no-audit --no-fund

## Setup - Update dependencies
update:
	npm update

## Serve - Serve the whole app
serve: export APP_RUNTIME_ENV ?= development
serve:
	npx vite --host=mache.ela.ooo --port=63286

## Build - Build
build: export APP_RUNTIME_ENV ?= development
build:
	npx tsc && npx vite build

## Tests - Lint
lint: lint.eslint lint.tsc

lint.eslint:
	npx eslint . --fix --ext ts,tsx --report-unused-disable-directives --max-warnings 0

lint.tsc:
	npx tsc --noemit

lint@integration: lint.eslint@integration lint.tsc@integration

lint.eslint@integration:
	npx eslint ./

lint.tsc@integration:
	npx tsc --noemit
