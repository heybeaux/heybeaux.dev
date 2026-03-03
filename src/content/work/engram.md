---
name: "Engram"
role: "Founder / Lead Developer"
period: "2025 – Present"
status: "active"
externalLink: "https://openengram.ai"
tech: ["NestJS", "Prisma", "PostgreSQL", "pgvector", "TypeScript", "Next.js"]
challenge: "AI agents forget everything between sessions. Most memory solutions are just vector search bolted onto chat history. And the platforms that do offer memory lock it in walled gardens."
solution: "Built open source memory infrastructure with ensemble vector search, a nightly Dream Cycle for consolidation, knowledge graph extraction, and a monitoring dashboard. Self-hosted with all features free, or hybrid with cloud."
outcome: "7,800+ memories in production, 124ms p50 recall, 2,700+ tests, 35 active agents, 6 open source repos under Apache 2.0. Cloud edition live with cross-device sync. Awareness module detecting patterns and generating insights."
---

Engram is the project I'm most proud of. It started because my AI assistant kept forgetting things I'd told it dozens of times. Now it's becoming the memory layer for AI agents — portable, private, and platform-agnostic.

The ecosystem includes six open source repositories: the core API, local embeddings on Metal GPU, a Next.js dashboard, an MCP server for Claude Desktop, semantic code search, and a TypeScript SDK. Everything works self-hosted with no cloud required.

Two AI agents (Rook and Kit) actively contribute to the codebase using Engram as their own memory system. They fix bugs, ship features, and review each other's code. It's a strange and wonderful feedback loop.
