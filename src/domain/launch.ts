export type ApiResponse = {
  docs: Launch[];
  totalDocs: number;
  offset: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: null;
  nextPage: number;
};

export type Launch = {
  id: string;
  fairings: Fairings;
  static_fire_date_utc: Date;
  static_fire_date_unix: number;
  net: boolean;
  window: number;
  rocket: string;
  success: boolean;
  failures: Failure[];
  details: string;
  crew: any[];
  ships: any[];
  capsules: any[];
  payloads: string[];
  launchpad: string;
  flight_number: number;
  name: string;
  date_utc: Date;
  date_unix: number;
  date_local: Date;
  date_precision: string;
  upcoming: boolean;
  cores: Core[];
  auto_update: boolean;
  tbd: boolean;
  launch_library_id: null;
  links: Links;
};

export type Links = {
  patch: Patch;
  webcast: string;
  article: string;
};

export type Patch = {
  small: string;
  large: string;
};

export type Core = {
  core: string;
  flight: number;
  gridfins: boolean;
  legs: boolean;
  reused: boolean;
  landing_attempt: boolean;
  landing_success: null;
  landing_type: null;
  landpad: null;
};

export type Failure = {
  time: number;
  altitude: null;
  reason: string;
};

export type Fairings = {
  reused: boolean;
  recovery_attempt: boolean;
  recovered: boolean;
  ships: any[];
};

export const launchResult = (launch: Launch) => {
    return launch.success ? "Success" : "Failure";
};

export const image = (launch: Launch) => {
    return launch.links.patch.small;
};


