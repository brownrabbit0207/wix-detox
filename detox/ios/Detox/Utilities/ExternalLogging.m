//
//  ExternalLogging.c
//  Detox
//
//  Created by Leo Natan (Wix) on 11/7/18.
DTX_CREATE_LOG(External)

void __dtx_send_external_log(const char* log)
{
	dtx_log_info(@"%s", log);
}
