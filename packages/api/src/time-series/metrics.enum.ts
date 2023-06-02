export enum Metric {
  // Default Metrics
  ALERT = 'temp_alert',
  WEEKLY_ALERT = 'temp_weekly_alert',
  DHW = 'dhw',
  SATELLITE_TEMPERATURE = 'satellite_temperature',
  AIR_TEMPERATURE = 'air_temperature',
  TOP_TEMPERATURE = 'top_temperature',
  BOTTOM_TEMPERATURE = 'bottom_temperature',
  SST_ANOMALY = 'sst_anomaly',
  SIGNIFICANT_WAVE_HEIGHT = 'significant_wave_height',
  WAVE_MEAN_PERIOD = 'wave_mean_period',
  WAVE_PEAK_PERIOD = 'wave_peak_period',
  WAVE_MEAN_DIRECTION = 'wave_mean_direction',
  WIND_SPEED = 'wind_speed',
  WIND_DIRECTION = 'wind_direction',
  BAROMETRIC_PRESSURE_TOP = 'barometric_pressure_top',
  BAROMETRIC_PRESSURE_TOP_DIFF = 'barometric_pressure_top_diff',
  BAROMETRIC_PRESSURE_BOTTOM = 'barometric_pressure_bottom',
  // Sonde Metrics
  CHOLOROPHYLL_RFU = 'cholorophyll_rfu',
  CHOLOROPHYLL_CONCENTRATION = 'cholorophyll_concentration',
  CONDUCTIVITY = 'conductivity',
  WATER_DEPTH = 'water_depth',
  ODO_SATURATION = 'odo_saturation',
  ODO_CONCENTRATION = 'odo_concentration',
  SALINITY = 'salinity',
  SPECIFIC_CONDUCTANCE = 'specific_conductance',
  TDS = 'tds',
  TURBIDITY = 'turbidity',
  TOTAL_SUSPENDED_SOLIDS = 'total_suspended_solids',
  SONDE_WIPER_POSITION = 'sonde_wiper_position',
  PH = 'ph',
  PH_MV = 'ph_mv',
  SONDE_BATTERY_VOLTAGE = 'sonde_battery_voltage',
  SONDE_CABLE_POWER_VOLTAGE = 'sonde_cable_power_voltage',
  PRESSURE = 'pressure',
  PRECIPITATION = 'precipitation',
  RH = 'rh',
  WIND_GUST_SPEED = 'wind_gust_speed',
  // HUI Metrics
  NITROGEN_TOTAL = 'nitrogen_total',
  PHOSPHORUS_TOTAL = 'phosphorus_total',
  PHOSPHORUS = 'phosphorus',
  SILICATE = 'silicate',
  NNN = 'nitrate_plus_nitrite',
  AMMONIUM = 'ammonium',
}