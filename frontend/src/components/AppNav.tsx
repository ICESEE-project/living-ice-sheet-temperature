function AppNav() {
  return (
    <div className="livist-appbar">
      <a className="livist-home" href="/livist/">
        LIVIST
      </a>

    <nav className="livist-links" aria-label="LIVIST navigation">

      {/* <a href="/livist/">
        LIVIST
      </a> */}

      <a href="/livist/">
        User Manual
      </a>

      <a href="/livist/docs/">
        Python Documentation
      </a>

      <a
        href="https://source.coop/englacial/ice-sheet-temperature"
        target="_blank"
        rel="noopener noreferrer"
      >
        Data Repository
      </a>

    </nav>
      <style>{`
        .livist-appbar {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          gap: 12px;
          min-height: 42px;
          padding: 5px 16px;
          background: #ffffff;
          border-bottom: 1px solid #e5e7eb;
          font-family: system-ui, -apple-system, BlinkMacSystemFont,
            "Segoe UI", Roboto, Arial, sans-serif;
          box-sizing: border-box;
          z-index: 20;
        }

        .livist-home {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 15px;
          border-radius: 9px;
          background: #2563eb;
          color: #ffffff !important;
          font-size: 14px;
          font-weight: 750;
          line-height: 1;
          text-decoration: none !important;
          white-space: nowrap;
        }

        .livist-home:hover {
          background: #1d4ed8;
        }

        .livist-links {
          display: flex;
          align-items: center;
          gap: 0;
          min-width: 0;
        }

        .livist-links a {
          display: inline-flex;
          align-items: center;
          padding: 7px 12px;
          color: #334155;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          white-space: nowrap;
        }

        .livist-links a:hover {
          color: #2563eb;
        }

        .livist-links a:not(:last-child)::after {
          content: "|";
          margin-left: 20px;
          color: #cbd5e1;
          font-weight: 400;
        }

        @media (max-width: 700px) {
          .livist-appbar {
            align-items: flex-start;
            flex-direction: column;
            gap: 5px;
            padding: 9px 12px;
          }

          .livist-links {
            width: 100%;
            overflow-x: auto;
            padding-bottom: 2px;
          }

          .livist-links a {
            padding: 7px 10px 7px 0;
            font-size: 13px;
          }

          .livist-links a:not(:last-child)::after {
            margin-left: 10px;
          }
        }
      `}</style>
    </div>
  );
}

export default AppNav;
