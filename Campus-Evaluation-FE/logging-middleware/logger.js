// logging-middleware/logger.js

const BASE_URL =
  "http://4.224.186.213/evaluation-service";

let accessToken = null;

/**
 * Set token after successful authentication
 */
export const setAccessToken = (token) => {
  accessToken = token;
};

/**
 * Send logs to Affordmed logging server
 *
 * @param {string} stack
 * @param {string} level
 * @param {string} packageName
 * @param {string} message
 */
export async function Log(
  stack,
  level,
  packageName,
  message
) {
  try {
    if (!accessToken) {
      throw new Error(
        "Access token not initialized"
      );
    }

    const response = await fetch(
      `${BASE_URL}/logs`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          stack,
          level,
          package: packageName,
          message,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(
        `Logging failed: ${response.status}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error(
      "Logger Error:",
      error.message
    );
  }
}