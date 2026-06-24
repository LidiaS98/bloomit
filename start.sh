#!/bin/bash
# Start frontend
cd frontend && npm run dev &

# Start backend
cd "$(dirname "$0")" && mvn -f pom.xml spring-boot:run