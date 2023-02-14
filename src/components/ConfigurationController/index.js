// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onClickContent = () => {
        onToggleShowContent()
      }
      const onClickLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }
      const onClickRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div>
          <h1>Layout</h1>
          <ul>
            <li onChange={onClickContent}>
              <input type="checkbox" id="content" value={showContent} />
              <label htmlFor="content">Content</label>
            </li>
            <li onChange={onClickLeftNavbar} value={showLeftNavbar}>
              <input type="checkbox" id="leftNav" />
              <label htmlFor="content">Left Navbar</label>
            </li>
            <li onChange={onClickRightNavbar} value={showRightNavbar}>
              <input type="checkbox" id="rightNav" />
              <label htmlFor="content">Right Navbar</label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
