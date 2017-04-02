const reactHelper = require('react-helper');

/** Register your components in this file **/
const FishList = require('./components/FishList');
const Fish = require('./components/Fish');
const ExpressReactHelperPage = require('./components/ExpressReactHelperPage');

reactHelper.register({FishList});
reactHelper.register({Fish});
reactHelper.register({ExpressReactHelperPage});

