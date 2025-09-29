import { load } from "joblist/store";
import mountEnrollments from "joblist/VanillaEnrollments";
import mountSearch from "joblist/VanillaSearch";

mountEnrollments('#enrollments');
mountSearch('#search');

load();