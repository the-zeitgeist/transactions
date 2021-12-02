import "./panel.css";

export const Panel =
  (Component, panelName, InnerComponent) =>
    ({ ...props }) =>
    (
      <div className="panel">
        <div className="panel-title">
          <p>{panelName}</p>
          {InnerComponent && <InnerComponent />}
        </div>
        <Component {...props} />
      </div>
    );
