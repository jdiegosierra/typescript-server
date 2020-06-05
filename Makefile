SHELL := /bin/bash

#define yarn
#    source $(HOME)/.nvm/nvm.sh && nvm i $(1) && npm i -g yarn && eval "yarn $(2)"
#endef
#
#define node-bin
#	source $(HOME)/.nvm/nvm.sh && nvm which $(1)
#endef
#
#
## commands
## --------
#
## set up linux (installs docker, node and pm2)
#setup-linux:
#	# install docker
#	[ -x "$(shell command -v docker)" ] || ( \
#		wget -qO- https://get.docker.com | bash && \
#		sudo usermod -aG docker $(USER) \
#	)
#	# install nvm, node (12 and latest) and pm2
#	wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
#	export NVM_DIR="$(shell [ -z "${XDG_CONFIG_HOME-}" ] && printf %s "$(HOME)/.nvm" || printf %s "$(XDG_CONFIG_HOME)/nvm")" && \
#		[ -s "$(NVM_DIR)/nvm.sh" ] && \. "$(NVM_DIR)/nvm.sh" && \
#		nvm i node && \
#		npm i -g pm2
#
## set up fabric
#setup-fabric:
#	rm -rf blockchain-deployment/bin
#	cd blockchain-deployment && \
#	wget -qO- https://raw.githubusercontent.com/hyperledger/fabric/master/scripts/bootstrap.sh | bash -s -- -s
#
## install all required dependencies
#setup:
#	[ -d "./blockchain-deployment/bin" ] || make setup-fabric
#	cd chaincode && $(call yarn,12)
#	cd government-app/backend && $(call yarn,12)
#	cd government-app/frontend && $(call yarn,node)
#	cd healthcare-app/backend && $(call yarn,12)
#	cd travel-app/backend && $(call yarn,12)
#
## format all projects
#format:
#	cd government-app/backend && $(call yarn,12,format)
#	cd government-app/frontend && $(call yarn,node,format)
#	cd healthcare-app/backend && $(call yarn,12,format)
#	cd travel-app/backend && $(call yarn,12,format)
#
## build all projects
#build:
#	cd chaincode && $(call yarn,12,build)
#	cd government-app/frontend && $(call yarn,node,build)
#
#define start_back_front
#	pm2 start --name passport19-$(1)-back --interpreter $(shell $(call node-bin,12)) $(2)-app/backend/api.js -- $(3)
#	cd $(2)-app/frontend && PORT=$(4) pm2 start --name passport19-$(1)-front --interpreter $(shell $(call node-bin,node)) npm -- start
#	# TODO: use pm2 SPA server with build instead
#endef

# start demo
start-demo:	 # PM2 + docker?
	./scripts/start-demo.sh
	#$(call start_back_front,gov,government,8001,7001)
	# $#(call start_back_front,health,healthcare,8002,7002)
	# $#(call start_back_front,travel,travel,8003,7003)

define stop_back_front
	pm2 delete passport19-$(1)-back passport19-$(1)-front
endef

# stop
stop-demo:
	./scripts/stop-demo.sh
	-#$(call stop_back_front,gov)
	# -$(call stop_back_front,health)
	# -$(call stop_back_front,travel)

## refresh demo
demo-refresh:
	cd scripts && docker-compose refresh
#
## set up and start the demo from scratch (including OS dependencies)
#quick-start:
#	make setup-linux && source ~/.bashrc && make refresh
#
#
## makefile help and guide
## -----------------------
#
#define help_text
#
#
#                                       _  __  ___
#                                      | |/_ |/ _ \
#  _ __   __ _ ___ ___ _ __   ___  _ __| |_| | (_) |
# | '_ \ / _` / __/ __| '_ \ / _ \| '__| __| |\__, |
# | |_) | (_| \__ \__ \ |_) | (_) | |  | |_| |  / /
# | .__/ \__,_|___/___/ .__/ \___/|_|   \__|_| /_/
# | |                 | |
# |_|                 |_|     (a blockchain demo)
#
#
#Usage: make [COMMAND]
#Example: make quick-start
#
#
#Commands
#========
#
#Setup:
#  setup-linux         Set up Linux (installs docker, node and pm2)
#  setup-fabric        Install or update fabric binaries and images
#  setup               Install all required dependencies
#
#Demo:
#  start               Start demo
#  quick-start         Set up and start the demo from scratch (including Linux setup)
#  stop                Stop demo
#  refresh             Refresh demo
#
#Development:
#  format              Format all projects
#  build               Build all projects
#
#Help:
#  help                Show help with full command list
#  guide               Show usage guide
#
#endef
#export help_text
## show help with full command list
#help:
#	@echo "$$help_text"
#
#define guide_text
#
#
#                                       _  __  ___
#                                      | |/_ |/ _ \
#  _ __   __ _ ___ ___ _ __   ___  _ __| |_| | (_) |
# | '_ \ / _` / __/ __| '_ \ / _ \| '__| __| |\__, |
# | |_) | (_| \__ \__ \ |_) | (_) | |  | |_| |  / /
# | .__/ \__,_|___/___/ .__/ \___/|_|   \__|_| /_/
# | |                 | |
# |_|                 |_|     (a blockchain demo)
#
#
#
#
#Usage guide
#===========
#
#Demoing
#-------
#
#- Start the demo:
#$ make quick-start
#
#- Stop the demo:
#$ make stop
#
#Developing
#----------
#
#- Install Docker and Node.js (if not already installed):
#$ make setup-linux
#
#- Setup all projects after cloning:
#$ make setup
#
#- Automatically format the code in all projects:
#$ make format
#
#- Build the code in all projects:
#$ make build
#
#- Refresh the demo (stop, build and start again):
#$ make refresh
#
#For more help, read the README.md file.
#
#endef
#export guide_text
## show usage guide
#guide:
#	@echo "$$guide_text"
