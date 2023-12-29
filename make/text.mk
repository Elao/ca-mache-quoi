##########
# Colors #
##########

MACHE_COLOR_RESET   := \033[0m
MACHE_COLOR_ERROR   := \033[31m
MACHE_COLOR_INFO    := \033[32m
MACHE_COLOR_WARNING := \033[33m
MACHE_COLOR_COMMENT := \033[36m

######################
# Special Characters #
######################

# Usage:
#   $(call mache_message, Foo$(,) bar) = Foo, bar
#   $(call mache_message, $(lp)Foo bar) = (Foo bar
#   $(call mache_message, Foo$(rp) bar) = Foo) bar

, := ,
lp := (
rp := )

########
# Time #
########

# Usage:
#   $(call mache_time) = 11:06:20

define mache_time
`date -u +%T`
endef

###########
# Message #
###########

# Usage:
#   $(call mache_message, Foo bar)         = Foo bar
#   $(call mache_message_success, Foo bar) = (っ◕‿◕)っ Foo bar
#   $(call mache_message_warning, Foo bar) = ¯\_(ツ)_/¯ Foo bar
#   $(call mache_message_error, Foo bar)   = (╯°□°)╯︵ ┻━┻ Foo bar

define mache_message
	printf "$(MACHE_COLOR_INFO)$(strip $(1))$(MACHE_COLOR_RESET)\n"
endef

define mache_message_success
	printf "$(MACHE_COLOR_INFO)(っ◕‿◕)っ $(strip $(1))$(MACHE_COLOR_RESET)\n"
endef

define mache_message_warning
	printf "$(MACHE_COLOR_WARNING)¯\_(ツ)_/¯ $(strip $(1))$(MACHE_COLOR_RESET)\n"
endef

define mache_message_error
	printf "$(MACHE_COLOR_ERROR)(╯°□°)╯︵ ┻━┻ $(strip $(1))$(MACHE_COLOR_RESET)\n"
endef

#######
# Log #
#######

# Usage:
#   $(call mache_log, Foo bar)         = [11:06:20] [target] Foo bar
#   $(call mache_log_warning, Foo bar) = [11:06:20] [target] ¯\_(ツ)_/¯ Foo bar
#   $(call mache_log_error, Foo bar)   = [11:06:20] [target] (╯°□°)╯︵ ┻━┻ Foo bar

define mache_log
	printf "[$(MACHE_COLOR_COMMENT)$(call mache_time)$(MACHE_COLOR_RESET)] [$(MACHE_COLOR_COMMENT)$(@)$(MACHE_COLOR_RESET)] " ; $(call mache_message, $(1))
endef

define mache_log_warning
	printf "[$(MACHE_COLOR_COMMENT)$(call mache_time)$(MACHE_COLOR_RESET)] [$(MACHE_COLOR_COMMENT)$(@)$(MACHE_COLOR_RESET)] "  ; $(call mache_message_warning, $(1))
endef

define mache_log_error
	printf "[$(MACHE_COLOR_COMMENT)$(call mache_time)$(MACHE_COLOR_RESET)] [$(MACHE_COLOR_COMMENT)$(@)$(MACHE_COLOR_RESET)] " ;  $(call mache_message_error, $(1))
endef

###########
# Confirm #
###########

# Usage:
#   $(call mache_confirm, Foo bar) = ༼ つ ◕_◕ ༽つ Foo bar (y/N):
#   $(call mache_confirm, Bar foo, y) = ༼ つ ◕_◕ ༽つ Foo bar (Y/n):

define mache_confirm
	$(if $(CONFIRM),, \
		printf "$(MACHE_COLOR_INFO) ༼ つ ◕_◕ ༽つ $(MACHE_COLOR_WARNING)$(strip $(1)) $(MACHE_COLOR_RESET)$(MACHE_COLOR_WARNING)$(if $(filter y,$(2)),(Y/n),(y/N))$(MACHE_COLOR_RESET): " ; \
		read CONFIRM ; \
		case $$CONFIRM in $(if $(filter y,$(2)), \
			[nN]$(rp) printf "\n" ; exit 1 ;; *$(rp) ;;, \
			[yY]$(rp) ;; *$(rp) printf "\n" ; exit 1 ;; \
		) esac \
	)
endef

################
# Conditionals #
################

# Usage:
#   $(call mache_error_if_not, $(FOO), FOO has not been specified) = (╯°□°)╯︵ ┻━┻ FOO has not been specified

define mache_error_if_not
	$(if $(strip $(1)),, \
		$(call mache_message_error, $(strip $(2))) ; exit 1 \
	)
endef

# Usage:
#   $(call mache_confirm_if, $(FOO), Foo bar) = ༼ つ ◕_◕ ༽つ Foo bar (y/N):

define mache_confirm_if
	$(if $(strip $(1)), \
		$(call mache_confirm, $(strip $(2)))
	)
endef

# Usage:
#   $(call mache_confirm_if_not, $(FOO), Foo bar) = ༼ つ ◕_◕ ༽つ Foo bar (y/N):

define mache_confirm_if_not
	$(if $(strip $(1)),, \
		$(call mache_confirm, $(strip $(2)))
	)
endef

##########
# Random #
##########

# Usage:
#   $(call mache_rand, 8) = 8th56zp2

define mache_rand
`cat /dev/urandom | LC_ALL=C tr -dc 'a-z0-9' | fold -w $(strip $(1)) | head -n 1`
endef
