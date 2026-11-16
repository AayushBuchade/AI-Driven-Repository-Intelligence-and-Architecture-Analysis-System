import { google } from "@ai-sdk/google";
import { localEmbeddingModel } from "./local-embeddings";

/** Gemini 2.5 Flash-Lite for chat, wiki, and analysis (free API tier) */
export const chatModel = google("gemini-2.5-flash-lite");

/**
 * Local embeddings via Vercel AI SDK (no Google embeddings).
 * Vectors are computed in-process so RAG stays provider-independent.
 */
export const embeddingModel = localEmbeddingModel;

export { EMBEDDING_DIMENSION } from "./local-embeddings";
