//
//  ViewController.m
//  NativeExample
//
//  Created by Etgar Shmueli on 31/07/2016.
@interface ViewController () {
}
        
@end
@implementation ViewController

    - (void)viewDidLoad {
        [super viewDidLoad];
    }

    - (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
        GreetingViewController *vc = segue.destinationViewController;
        if ([segue.identifier  isEqual: @"helloSegue"]) {
            vc.greeting = @"Hello!!!";
        }
        else if ([segue.identifier  isEqual: @"worldSegue"]) {
            vc.greeting = @"World!!!";
        }
    }

    - (void)didReceiveMemoryWarning {
        [super didReceiveMemoryWarning];
    }

@end
