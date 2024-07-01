import { Outlet, NavLink, useNavigation } from "react-router-dom";

export default function Root() {
  const navigation = useNavigation();

  return (
    <>
      <div id="sidebar">
        <h1>Expense Tracker</h1>
        <nav>
          <ul>
            <li key="1">
              <NavLink
                to={`/Home`}
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                <i>Home</i>
              </NavLink>
            </li>
            <li key="2">
              <NavLink
                to={`/Expense`}
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                <i>Expense</i>
              </NavLink>
            </li>

            <li key="3">
              <NavLink
                to={`/Budget`}
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                <i>Budget</i>
              </NavLink>
            </li>

            <li key="4">
              <NavLink
                to={`/SpendCategory`}
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                <i>Category</i>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div
        id="detail"
        className={navigation.state === "loading" ? "loading" : ""}
      >
        <Outlet />
      </div>
    </>
  );
}
