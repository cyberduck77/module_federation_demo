import { load } from "joblist/store";
import mountJobs from "joblist/VanillaJobs";
import mountAdd from "joblist/VanillaAdd";
import mountSearch from "joblist/VanillaSearch";

mountJobs('#jobs');
mountAdd('#add');
mountSearch('#search');

load('job_list');