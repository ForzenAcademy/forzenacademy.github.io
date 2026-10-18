# Deployment moved to Adventure

Use [ADVENTURE_DEPLOY.md](ADVENTURE_DEPLOY.md) and `scripts/deploy-adventure.sh`.
Production builds now go exclusively to `adventure/`. The legacy
`scripts/deploy-monsters.sh` command forwards to the adventure helper and never
updates the old `monsters/` folder.
