#!/bin/bash

# regex to validate in commit msg
techmelyTicketReg='^(TML-[A-Z0-9]{2,4}|merge|hotfix|release)'
errorMsg="Aborting commit. Your commit message must start with JIRA code (eg: 'TML-1111') or 'merge|hotfix|release'"

if ! grep -iqE "$techmelyTicketReg" "$1"; then
    echo "$errorMsg" >&2
    exit 1
fi
