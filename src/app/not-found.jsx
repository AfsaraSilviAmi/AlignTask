"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        background:
          "linear-gradient(to right, #678d58, #74d3ae)",
        color: "white",
        padding: "20px",
      }}
    >
      {/* Big 404 */}
      <h1
        style={{
          fontSize: "6rem",
          fontWeight: "900",
          marginBottom: "10px",
        }}
      >
        404
      </h1>

      {/* Message */}
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "700",
          marginBottom: "10px",
        }}
      >
        Page Not Found
      </h2>

      <p
        style={{
          maxWidth: "500px",
          fontSize: "1.1rem",
          opacity: 0.9,
        }}
      >
        The page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Buttons */}
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Link href="/">
          <button
            style={{
              padding: "12px 25px",
              borderRadius: "999px",
              border: "none",
              fontWeight: "700",
              cursor: "pointer",
              background: "white",
              color: "#678d58",
              transition: "0.3s",
            }}
          >
            Go Home
          </button>
        </Link>

        <Link href="/browse-tasks">
          <button
            style={{
              padding: "12px 25px",
              borderRadius: "999px",
              border: "2px solid white",
              fontWeight: "700",
              cursor: "pointer",
              background: "transparent",
              color: "white",
              transition: "0.3s",
            }}
          >
            Browse Tasks
          </button>
        </Link>
      </div>
    </div>
  );
}