# Create a new directory
mkdir newsletter-sending-app && cd newsletter-sending-app

# Create a Node.js workspace with Yarn 4
yarn init -2 -pw && yarn set version canary

# Use the good ol' node_modules
yarn config set nodeLinker node-modules

# Ignore artifacts
echo "build/\nnode_modules/" >> .gitignore

# Commit
git add . && git commit -m "chore: setup monorepo"