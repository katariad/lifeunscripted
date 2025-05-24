import React from "react";
import Widgettitle from "../../ui/Widgettitle";
import Image from "next/image";
import Link from "next/link";
import "./widget.css";
import { CSSProperties } from "react";

const styleInput: CSSProperties = {
  fontFamily: "Roboto-Slab, sans-serif",
  fontWeight: "normal",
  color: "rgb(0, 0, 0)",
  fontSize: "14px",
  textAlign: "center",
  backgroundColor: "rgb(255, 255, 255)",
  textTransform: "none",
  width: "100%",
  height: "40px",
  borderRadius: "6px",
  border: "2px solid #e9e8e8",
};

const styleButton: CSSProperties = {
  fontFamily: "Arial",
  fontWeight: "bold",
  color: "rgb(253, 253, 255)",
  fontSize: "16px",
  textAlign: "center",
  backgroundColor: "rgb(51, 51, 214)",
  textTransform: "none",
  width: "100%",
  height: "40px",
  border: "0",
  borderRadius: "6px",
  lineHeight: "0px",
  cursor: "pointer",
};

export default function Subscribeus() {
  return (
    <div className="p-1 widget">
      <Widgettitle title={"subscribe us"} />
      <div className="followit--follow-form-container p-2.5">
        <form
          action="https://api.follow.it/subscription-form/b0tGSE5mRitpNkxmUGNiNFBoM0NBUlJFcVJ3OG9SUFM3V0ZtM1lTWHRleVlmYUU3MitWdWpxZ1B2RmRSU2tES1ZFRU53UnhqbGFMSkp1V0YyclljQzh4NVZvQnczd3dWRFFwUHdVR1NLZ2pWZHpYQUhUODZrWC9qS3NlT2xEZkt8dVIwUTVMYW03ZUJ0cFhNSmk2cXpUdlFJU1VVRnNYQVFrVU84NXoyQ3Bpcz0=/8"
          method="post"
        >
          <div className="form-preview">
            <div className="preview-input-field mb-3">
              <input
                name="email"
                placeholder="Enter your email"
                style={styleInput}
                type="email"
              />
            </div>
            <div className="preview-submit-button">
              <button style={styleButton} type="submit">
                Subscribe
              </button>
            </div>
          </div>
        </form>
        <Link className="powered-by-line" href="https://follow.it">
          Powered by
          <span className="ml-2">
            <Image
              alt="follow.it"
              height="17"
              src="https://follow.it/images/colored-logo.svg"
              width={100}
            />
          </span>
        </Link>
      </div>
    </div>
  );
}
