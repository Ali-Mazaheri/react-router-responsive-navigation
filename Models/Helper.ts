// Helper method to create navigation hierarchy from raw JSON data 
// the result will be the same as data in navModel
// use either of them

export class Helper {
  public static createNavigationHierarchy<T>(data, model: new (...args) => T) {
    return data.map(x => {
      return new model(x[0], x[1], x[2], Helper.createNavigationHierarchy(x[3], model));
    });
  }
}

// ===========================================================================

import { NavigationModel } from "./NavigationModel";
let NavModel = [
  new NavigationModel("icon1", "Home", "/"),
  new NavigationModel("icon2", "Page1", "/page1"),
  new NavigationModel("icon3", "Page2", "/page2"),
  new NavigationModel("icon4", "Page3", "/page3",
    [
      new NavigationModel("icon7", "Page3 A", "/page3/A",
        [
          new NavigationModel("icon1", "Page3 A1", "/page3/A/1",
            [
              new NavigationModel("icon11", "Page3 A11", "/page3/A/1/1")
            ]),
          new NavigationModel("icon7", "Page3 A2", "/page3/A/2")
        ]),
      new NavigationModel("icon8", "Page3 B", "/page3/B",
        [
          new NavigationModel("icon2", "Page3 B1", "/page3/B/1"),
          new NavigationModel("icon3", "Page3 B2", "/page3/B/2"),
          new NavigationModel("icon4", "Page3 B3", "/page3/B/3")
        ])
    ]
  ),
  new NavigationModel("icon5", "Page5", "/page4"),
  new NavigationModel("icon6", "Page6", "/page5",
    [
      new NavigationModel("icon9", "Page5 A", "/page5/A",
        [
          new NavigationModel("icon6", "Page5 A1", "/page5/A/1",
            [
              new NavigationModel("icon1", "Page5 A11", "/page5/A/1/1")
            ]),
          new NavigationModel("icon7", "Page5 A2", "/page5/A/2")
        ]),
      new NavigationModel("icon10", "Page5 B", "/page5/B",
        [
          new NavigationModel("icon8", "Page5 B1", "/page5/B/1"),
          new NavigationModel("icon9", "Page5 B2", "/page5/B/2"),
          new NavigationModel("icon10", "Page5 B3", "/page5/B/3")
        ]),
      new NavigationModel("icon11", "Page5 C", "/page5/C")
    ]
  )
];

export { NavModel }
