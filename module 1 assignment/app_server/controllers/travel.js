const fs = require('fs');
const path = require('path');

const tripsPath = path.join(__dirname, '../../data/trips.json');

const travel = (req, res) => {
  try {
    const trips = JSON.parse(fs.readFileSync(tripsPath, 'utf8'));

    res.render('travel', {
      title: 'Travel',
      travelActive: true,
      trips
    });
  } catch (error) {
    console.error('Unable to load trip data:', error);

    res.status(500).render('error', {
      message: 'Unable to load trip data.',
      error
    });
  }
};

module.exports = {
  travel
};