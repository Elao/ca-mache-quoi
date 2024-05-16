########
# Help #
########

.DEFAULT_GOAL := help

MACHE_HELP = \
	Usage: make [$(MACHE_COLOR_INFO)command$(MACHE_COLOR_RESET)] \
	$(call mache_help_section, Help) \
	$(call mache_help,help,This help)

define mache_help_section
	\n\n$(MACHE_COLOR_COMMENT)$(strip $(1)):$(MACHE_COLOR_RESET)
endef

define mache_help
  \n  $(MACHE_COLOR_INFO)$(1)$(MACHE_COLOR_RESET) $(2)
endef

help:
	@printf "\n$(MACHE_HELP)"
	@awk ' \
		BEGIN { \
			sectionsName[1] = "Commands" ; \
			sectionsCount = 1 ; \
		} \
		/^[-a-zA-Z0-9_.@%\/+]+:/ { \
			if (match(lastLine, /^## (.*)/)) { \
				command = substr($$1, 1, index($$1, ":") - 1) ; \
				section = substr(lastLine, RSTART + 3, index(lastLine, " - ") - 4) ; \
				if (section) { \
					message = substr(lastLine, index(lastLine, " - ") + 3, RLENGTH) ; \
					sectionIndex = 0 ; \
					for (i = 1; i <= sectionsCount; i++) { \
						if (sectionsName[i] == section) { \
							sectionIndex = i ; \
						} \
					} \
					if (!sectionIndex) { \
						sectionIndex = sectionsCount++ + 1 ; \
						sectionsName[sectionIndex] = section ; \
					} \
				} else { \
					message = substr(lastLine, RSTART + 3, RLENGTH) ; \
					sectionIndex = 1 ; \
				} \
				if (length(command) > sectionsCommandLength[sectionIndex]) { \
					sectionsCommandLength[sectionIndex] = length(command) ; \
				} \
				sectionCommandIndex = sectionsCommandCount[sectionIndex]++ + 1; \
				helpsCommand[sectionIndex, sectionCommandIndex] = command ; \
				helpsMessage[sectionIndex, sectionCommandIndex] = message ; \
			} \
		} \
		{ lastLine = $$0 } \
		END { \
			for (i = 1; i <= sectionsCount; i++) { \
				if (sectionsCommandCount[i]) { \
					printf "\n\n$(MACHE_COLOR_COMMENT)%s:$(MACHE_COLOR_RESET)", sectionsName[i] ; \
					for (j = 1; j <= sectionsCommandCount[i]; j++) { \
						printf "\n  $(MACHE_COLOR_INFO)%-" sectionsCommandLength[i] "s$(MACHE_COLOR_RESET) %s", helpsCommand[i, j], helpsMessage[i, j] ; \
					} \
				} \
			} \
		} \
	' $(MAKEFILE_LIST)
	@printf "\n\n"
	@printf "$(if $(MACHE_HELP_PROJECT),$(MACHE_HELP_PROJECT)\n\n)"
.PHONY: help

help.project:
	@printf "$(if $(MACHE_HELP_PROJECT),\n$(MACHE_HELP_PROJECT)\n\n)"
