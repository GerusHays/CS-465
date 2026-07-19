const index = (req, res) => {
  res.render('index', {
    title: 'Travlr Getaways',
    homeActive: true
  });
};

const travel = (req, res) => {
  res.render('travel', {
    title: 'Travel',
    travelActive: true
  });
};

module.exports = {
  index,
  travel
};
