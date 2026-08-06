function AppNav() {
  return (
    <div className="livist-appbar">

      <div className="livist-appbar-left">

        <a className="livist-home" href="/livist/">
          LIVIST
        </a>

        <nav className="livist-links" aria-label="LIVIST navigation">

          <a href="/livist/docs/livist_user_manual/">
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

      </div>

      {/* CryoStack shared account widget */}
      <div className="cryostack-application-nav-actions"></div>

      <style>{`
        .livist-appbar {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;

          min-height: 42px;
          padding: 5px 16px;

          background: #ffffff;
          border-bottom: 1px solid #e5e7eb;

          font-family: system-ui, -apple-system, BlinkMacSystemFont,
            "Segoe UI", Roboto, Arial, sans-serif;

          box-sizing: border-box;
          z-index: 20;
        }

        .livist-appbar-left {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
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

        /* Shared CryoStack account area */

        .cryostack-application-nav-actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;

          margin-left: auto;
          min-width: 140px;
        }

        .cryostack-application-nav-actions
        .cryostack-global-account {
          margin: 0 !important;
        }

        @media (max-width: 700px) {

          .livist-appbar {
            flex-direction: column;
            align-items: stretch;
            gap: 8px;
            padding: 9px 12px;
          }

          .livist-appbar-left {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
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

          .cryostack-application-nav-actions {
            justify-content: flex-start;
            margin-left: 0;
            min-width: auto;
          }
        }
      `}</style>

    </div>
  );
}

export default AppNav;