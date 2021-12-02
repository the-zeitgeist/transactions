import './panel.css';

export const Panel = (Component) => ({...props}) => (
  <div className="panel">
    <Component {...props} />
  </div>
)
