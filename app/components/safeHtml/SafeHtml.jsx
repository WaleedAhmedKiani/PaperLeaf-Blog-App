"use client";

import DOMPurify from "isomorphic-dompurify";

const SafeHtml = ({ html }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(html),
      }}
    />
  );
};

export default SafeHtml;
